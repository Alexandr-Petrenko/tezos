const BASE_URL = 'https://api.teztracker.com/v2/data/tezos/mainnet/blocks';
const limit = 15;
const offset = 0;

async function get() {
  const response = await fetch(BASE_URL);
  const result = await response.json();

  return result.splice(offset, limit);
}

// eslint-disable-next-line import/prefer-default-export
export function getBlocks() {
  return get();
}
