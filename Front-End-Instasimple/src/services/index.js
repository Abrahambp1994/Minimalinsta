// SERVICES

// LIKE/DISLIKE A POST

export const postLikeDislikeService = async (vote) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/posts/${vote.id}/like`,
    {
      method: "POST",
      headers: {
        Authorization: vote.token,
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// POST A PHOTO POST

export const sendPostService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// GET POSTS

export const getAllService = async (searchResults, token) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/${
      searchResults ? `?description=${searchResults}` : ""
    }`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// GET SINGLE POSTS

export const getSinglePostService = async (token, id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/post/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();
  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// USER

export const getUserDataService = async (id, token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/${id}`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

// MY USER

export const getMyDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

// LOG IN

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

/* REGISTER */

export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
