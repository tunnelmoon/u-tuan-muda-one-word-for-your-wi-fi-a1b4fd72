[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/tunnelmoon/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/tunnelmoon/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

# One Word for Your Wi-Fi

Entry for the [make.fun bounty](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72): one word describing home Wi-Fi, at most 20 characters.

## The word

**Ghosting**

Home Wi-Fi is there, full bars, and then it is gone mid-sentence, no explanation, no goodbye. That is ghosting, and every home Wi-Fi does it. It is funny at once, true to how Wi-Fi actually behaves, and it works as a network name on its own: you see it in the Wi-Fi list and you already know.

## How it works

`main.ts` (Node 22, stdlib only) writes the word to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt`, validating first that it is 1 to 20 characters and a single word of letters only, then reading the file back to confirm the round-trip.
