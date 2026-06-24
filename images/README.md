# Images for the deck

Drop image files here with these **exact filenames**. The deck auto-detects them —
as soon as a file exists, the dashed placeholder on that slide is replaced by your image
(no code changes needed). If a file is missing, the slide just shows the placeholder, so
the deck is always presentable.

### ✅ Already wired (files you added)
| Filename | Slide | Shows |
|---|---|---|
| `transformer_architecture.webp` | 12 · Transformer | Revealed when you click the "TRANSFORMER" box to peek inside. |
| `Example-of-a-GPT-2-text-generation.png` | 20 · GPT-2 | Real GPT-2 output. |
| `GPT2 scare.png` | 21 · Too dangerous | The "too dangerous to release" story. |
| `Gemini doing search for latest question.png` | 38 · Knowledge cutoff | A model searching the web live. |

### ⬜ Still placeholders (add a file with the exact name to fill)
| Filename | Slide | What to put there |
|---|---|---|
| `supervised-flashcards.jpg` | 5 · Supervised | A parent/child with educational flashcards ("dog", "cat"). |
| `unsupervised-blocks.jpg` | 6 · Unsupervised | A child sorting colored/shaped blocks alone, no instructions. |
| `reinforcement-bike.jpg` | 7 · Reinforcement | A kid learning to ride a bike (training wheels / the wobble). |
| `rambler-party.png` | 24 · Genius who won't shut up | A brilliant person at a party rambling — or any "won't stop talking" meme. |
| `shoggoth.png` | 31 · The Shoggoth | The Shoggoth-with-smiley-mask meme (the classic AI alignment meme). |
| `closing-meme.png` | 49 · The meme | Your pick: Drake "it's just autocomplete", galaxy-brain escalation, or Shoggoth+toolbelt. |

> Filenames with spaces work fine. To re-point any slot at a different filename, search `data-img="..."` in `index.html`.

## Notes
- **Aspect ratio:** images are shown with `object-fit: cover`, so they fill the slot and
  crop gracefully — landscape (≈4:3 or 16:9) works best. Don't worry about exact sizing.
- **Formats:** `.png`, `.jpg`, `.webp`, `.gif` all work. Keep the filename exactly as listed.
- **Want a different slot?** Search `data-img="..."` in `index.html` to find/rename any slot.
