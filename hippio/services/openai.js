const { createClient } = require('@supabase/supabase-js');
const { Configuration, OpenAIApi } = require("openai");

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Configure the OpenAI API with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define the function to create embeddings
async function encode(memory) {
  const response = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: memory,
  });

  return response;
}

module.exports = { encode, supabase };