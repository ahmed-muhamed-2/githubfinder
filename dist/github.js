class GitHub {
  constructor() {
    this.client_id = '08be353762485e6f17f5';
    this.client_secret = 'd621151eb349c0384929eeac0d200b4b64478a52';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUsers(user) {
    const profil = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profil.json();
    const rebos = await repoResponse.json();

    return {
      profile,
      rebos
    };
  }
}
