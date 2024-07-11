const axios = require('axios');

module.exports = async (req, res) => {
    const { conversation } = req.body;

    try {
        const response = await axios.post('GPT_API_ENDPOINT', {
            prompt: conversation,
        }, {
            headers: {
                'Authorization': `Bearer YOUR_API_KEY`
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating SOAP note');
    }
};
