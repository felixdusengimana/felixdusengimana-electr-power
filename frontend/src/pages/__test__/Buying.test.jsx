import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BASE_URL } from '../../utils';
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import Buying from '../Buying';
import user from '@testing-library/user-event';

const server = setupServer(
  rest.post(`${BASE_URL}/api/`, (req, res, ctx) => {
    const photo = req.body;
    return res(
      ctx.delay(200),
      ctx.json({ ...photo, favourite: !photo.favourite })
    );
  }),

  rest.get(`${BASE_URL}/api/`, (req, res, ctx) => {
    const name = req.url.searchParams.get('name') || 'Unknown';
    return res(
      //   ctx.delay(100),
      ctx.json([
        {
          id: 1,
          thumbnailUrl: '/photo1.png',
          title: name + ': Hello World',
          favourite: false,
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe('after application fully loads', () => {
  beforeEach(async () => {
    render(<Buying />);
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
  });

  it('renders the photos', () => {
    expect(screen.getByText('Unknown: Hello World')).toBeInTheDocument();
  });

  // describe('when clicking in "Refresh" Button', () => {
  //   beforeEach(async () => {
  //     user.type(screen.getByLabelText('Your Name:'), 'Felix');
  //     // await waitForElementToBeRemoved(() => screen.getByText('Loading...'));

  //   });

  //   it('renders the newly loaded data', () => {
  //     expect(screen.getByText('Felix: Hello World')).toBeInTheDocument();
  //   });
  // });

  describe('when clicking in "Refresh" Button and server returns error', () => {
    beforeEach(async () => {
      server.use(
        rest.get(
          `${BASE_URL}/api/`,
          (req, res, ctx) => {
            return res(
              ctx.status(500),
              ctx.json({ message: 'Sorry Something happened!' })
            );
          }
        )
      );
      user.click(screen.getByText('Refresh'));
      await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
    });

    it('renders the error keeping the old data', () => {
      expect(screen.getByText('Sorry Something happened!')).toBeInTheDocument();
    });
  });

  // describe('when clicking in "Add to Favourites" changes the button text', () => {
  //   beforeEach(async () => {
  //     user.click(screen.getByRole('button', { name: 'Add To Favourites' }));
  //     await waitForElementToBeRemoved(() =>
  //       screen.getByRole('button', { name: 'Add To Favourites' })
  //     );
  //   });

  //   it('renders "Remove from Favourites"', () => {
  //     expect(
  //       screen.getByRole('button', { name: 'Remove from Favourites' })
  //     ).toBeInTheDocument();
  //     expect(
  //       screen.queryByRole('button', { name: 'Add to Favourites' })
  //     ).not.toBeInTheDocument();
  //   });
  // });
});