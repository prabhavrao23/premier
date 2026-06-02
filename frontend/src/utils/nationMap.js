// Maps full country names to their 3-letter codes used in the database
const nationMap = {
  england: 'ENG', brazil: 'BRA', france: 'FRA', germany: 'GER',
  spain: 'ESP', portugal: 'POR', argentina: 'ARG', netherlands: 'NED',
  belgium: 'BEL', uruguay: 'URU', nigeria: 'NGA', ghana: 'GHA',
  senegal: 'SEN', ivory: 'CIV', 'ivory coast': 'CIV', cameroon: 'CMR',
  scotland: 'SCO', wales: 'WAL', ireland: 'IRL', 'northern ireland': 'NIR',
  denmark: 'DEN', sweden: 'SWE', norway: 'NOR', austria: 'AUT',
  switzerland: 'SUI', italy: 'ITA', croatia: 'CRO', serbia: 'SRB',
  poland: 'POL', ukraine: 'UKR', czech: 'CZE', slovakia: 'SVK',
  hungary: 'HUN', romania: 'ROU', greece: 'GRE', turkey: 'TUR',
  russia: 'RUS', japan: 'JPN', 'south korea': 'KOR', korea: 'KOR',
  australia: 'AUS', canada: 'CAN', usa: 'USA', mexico: 'MEX',
  colombia: 'COL', chile: 'CHI', ecuador: 'ECU', peru: 'PER',
  morocco: 'MAR', egypt: 'EGY', algeria: 'ALG', tunisia: 'TUN',
  mali: 'MLI', guinea: 'GUI', gabon: 'GAB', congo: 'COD',
  zimbabwe: 'ZIM', zambia: 'ZAM', jamaica: 'JAM', trinidad: 'TRI',
}

// Resolves a user's nation search string to what should be sent to the API
export function resolveNation(input) {
  if (!input) return ''
  const lower = input.toLowerCase().trim()
  return nationMap[lower] || input
}
