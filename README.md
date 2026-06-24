# How Do LLMs Become Smart? — the deck

A 48-slide, browser-based talk that **builds an LLM up in stages** — from an empty model to the
agent inside Claude Code. Light, formal "engineering keynote" theme. Built from `aaryan_script.txt`,
grounded in `LLM Training Presentation Research.docx`. No build step, no dependencies.

## Run it
Open **`index.html`** in any modern browser (Chrome/Safari/Firefox). Press **F** for fullscreen.

## Controls
| Key | Action |
|---|---|
| `→` / `Space` / click | Next slide |
| `←` | Previous |
| `F` | Fullscreen |
| `O` | Overview grid (click any slide to jump) |
| `D` | Reset / replay the current slide's interactive demo |
| `Home` / `End` | First / last slide |

- Typing in a demo input (e.g. the tokenizer) never advances the slide.
- The URL hash is the slide number (e.g. `index.html#29`) — deep-link any slide.
- Click the left ~18% of the screen to go back, anywhere else to advance.

## Structure — 10 Parts
The talk is organised into **Parts** (shown top-left): 1 the 3 training methods · 2 why text + the
Transformer · 3 the pre-training objective · 4 scaling & the GPT lineage · 5 alignment (SFT & RLHF) ·
6 reasoning & RL · 7 tool use & agents · 8 the full pipeline · 9 modern systems · 10 reading a model spec.

## The signature element — "The Stack"
A progress rail appears at the bottom **from GPT-1 onward** and tracks the training stage:
`BASE → INSTRUCT → CHAT → REASONING → AGENT`. **Completed stages are green, the current stage is
gold, future stages are greyed.** On the last slide of each stage the current block also turns green
to signal the hand-off to the next stage. The single **"The full pipeline"** slide lays out all stages.

## Interactive demos (9)
1. **Transformer peek** (Part 2) — click the box to glance inside, then close it.
2. **Tokenizer** (Part 3) — type any sentence, watch it split into tokens with IDs. Try "strawberry".
3. **Next-word prediction** (Part 3) — click predicted words to grow a sentence; "auto-write" runs it.
4. **Maze RL** (Part 1) — a robot in an N×N grid with bombs & a goal. "Take best step" shows state,
   actions, the reward of each move (+100 goal · +1 closer · −1 farther · −10 bomb), and the running total.
5. **Base-model behaviour** (Part 4) — watch a base model answer a question with… more questions.
6. **Preference ranking** (Part 5) — rank 4 answers best→worst, like a human labeller.
7. **Chain-of-thought** (Part 6) — reveal the worked solution step by step.
8. **MoE router** (Part 9) — pick a question, see which 2 experts the router wakes.
9. **Model-name decoder** (Part 10) — click each part of `GLM-5.2-XL-Instruct-MoE-300B-A8B`; also decodes `Llama-3-70B-Base`.

## Images
Image slots **auto-load** from `images/` (a tall/portrait source is safely cropped to its slot).
See `images/README.md` for exact filenames and what goes where. Missing files show a labelled
placeholder, so the deck is always presentable.

## Editing
Everything is one file: `index.html`. Slides are `<section class="slide">`; the Part label is
`data-act`, the overview label is `data-title`, and the training-stage rail is driven by `data-stack`
(present only from GPT-1). Colours and type are CSS variables at the top (`:root`) — the whole theme
flips from one place. Demos are plain JS at the bottom.

---
*Older drafts `deck.html`, `llm_training_master_presentation.html`, and `LLM_Training_Talk.md`
are left untouched; `index.html` is the current deck.*
