const endpoints: { [key: string]: string } = {
  user: "/HazelCindy",
  repos: "/HazelCindy/repos",
};

for (const key in endpoints) {
  endpoints[key] = `/users${endpoints[key]}`;
}

export default endpoints;
