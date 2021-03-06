const CHAR_SET = {
  nnnwwnwnn: '0',
  wnnwnnnnw: '1',
  nnwwnnnnw: '2',
  wnwwnnnnn: '3',
  nnnwwnnnw: '4',
  wnnwwnnnn: '5',
  nnwwwnnnn: '6',
  nnnwnnwnw: '7',
  wnnwnnwnn: '8',
  nnwwnnwnn: '9',
  wnnnnwnnw: 'A',
  nnwnnwnnw: 'B',
  wnwnnwnnn: 'C',
  nnnnwwnnw: 'D',
  wnnnwwnnn: 'E',
  nnwnwwnnn: 'F',
  nnnnnwwnw: 'G',
  wnnnnwwnn: 'H',
  nnwnnwwnn: 'I',
  nnnnwwwnn: 'J',
  wnnnnnnww: 'K',
  nnwnnnnww: 'L',
  wnwnnnnwn: 'M',
  nnnnwnnww: 'N',
  wnnnwnnwn: 'O',
  nnwnwnnwn: 'P',
  nnnnnnwww: 'Q',
  wnnnnnwwn: 'R',
  nnwnnnwwn: 'S',
  nnnnwnwwn: 'T',
  wwnnnnnnw: 'U',
  nwwnnnnnw: 'V',
  wwwnnnnnn: 'W',
  nwnnwnnnw: 'X',
  wwnnwnnnn: 'Y',
  nwwnwnnnn: 'Z',
  nwnnnnwnw: '-',
  wwnnnnwnn: '.',
  nwwnnnwnn: ' ',
  nwnwnwnnn: '$',
  nwnwnnnwn: '/',
  nwnnnwnwn: '+',
  nnnwnwnwn: '%',
  nwnnwnwnn: '*',
}

module.exports = lines => {
  let code = []

  const barThreshold = Math.ceil(
    lines.reduce((pre, item) => pre + item, 0) / lines.length
  )

  // Read one encoded character at a time.
  while (lines.length > 0) {
    const sequenceBar = lines
      .splice(0, 10)
      .map(line => (line > barThreshold ? 'w' : 'n'))

    code.push(CHAR_SET[sequenceBar.slice(0, 9).join('')])
  }

  if (code.pop() !== '*' || code.shift() !== '*') return null

  return code.join('')
}
