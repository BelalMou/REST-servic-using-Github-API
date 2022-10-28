const octokit = new Octokit({
    auth: 'fabpot'
  })
  
  await octokit.request('GET /user/emails', {})

