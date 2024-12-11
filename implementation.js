function perplexityApiConnector(params) {
    const { api_key, messages, model, max_tokens, temperature } = params;
    
    return fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${api_key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: model || 'llama-3.1-sonar-small-128k-online',
            messages: messages,
            max_tokens: max_tokens || 100,
            temperature: temperature || 0.7
        })
    })
    .then(response => response.json());
}
