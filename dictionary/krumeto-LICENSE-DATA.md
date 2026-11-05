# Krumeto dataset — license and attribution

This file accompanies `krumeto-data-2026-10-25.sqlite.zst`, the compiled dictionary
database used by Krumeto. It is an adaptation of the sources below.

## Licence: our compilation, and the parts inside

- **The compilation as a whole** (selection, arrangement, cleaning, merging and the
  data Krumeto adds itself) is published under the **Creative Commons
  Attribution-ShareAlike 4.0 International** license (CC BY-SA 4.0):
  https://creativecommons.org/licenses/by-sa/4.0/ — because Wiktionary, its main
  source, is CC BY-SA.
- **The parts inside keep their own licences, and those terms apply to them.** Our
  CC BY-SA licence does not replace them and does not relicense them. In particular,
  the CEFR-J levels are NOT under CC BY-SA (see below).

If you reuse the dump, credit "Krumeto (krumeto data dump 2026-10-25)" and every source
below as its own terms require, link the licences, share adaptations of our
compilation under CC BY-SA 4.0, and keep each part's own licence and credits.

## Sources contained in this dump

- **Wiktionary** (English edition, via kaikki.org / wiktextract) — senses, forms,
  pronunciation, translations, synonyms, etymology. © Wiktionary contributors,
  CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/). Each entry's source page
  is in `entries.wiki_url` — link it (Wikimedia's terms: attribution by hyperlink to the
  page, whose history lists the authors). We adapted the text (cleaned, shortened, merged,
  filtered, reordered). https://en.wiktionary.org · https://kaikki.org/dictionary/English/
- **Tatoeba** — example sentences and their translations. CC BY 2.0 FR
  (https://creativecommons.org/licenses/by/2.0/fr/), some sentences CC0 1.0; each
  sentence row carries its licence and, where Tatoeba records one, its contributor's
  username (about 45,000 sentences without an owner have none); `sentences.id` is the
  Tatoeba sentence ID (https://tatoeba.org/sentences/show/<id>). Keep the contributor's
  name whenever you show a sentence. https://tatoeba.org
- **Open English WordNet 2024** (© The Open English WordNet Team) — synsets,
  definitions, relations. CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/). It
  includes Princeton WordNet material under the WordNet License (WordNet 3.1 © 2011
  Princeton University; full text and disclaimer in the notices); credit both Princeton
  WordNet and the Open English WordNet team, as the OEWN licence asks.
  https://github.com/globalwordnet/english-wordnet
- **CEFR-J Vocabulary Profile 1.5** (© Tono Lab, Tokyo University of Foreign Studies) —
  word levels A1–B2, and the values we derive from them (for example the estimated
  difficulty level of each example sentence, `sentences.cefr_est`, which also uses
  Octanove and Krumeto's own frequency values). The CEFR-J levels are not ours to license and are NOT under
  CC BY-SA; they and the values derived from them stay subject to the CEFR-J terms —
  free for research and commercial use with citation (where a value also derives from
  Octanove or the frequency values, their CC BY-SA terms apply as well). In `entries.cefr`, A1–B2
  come from CEFR-J, C1/C2 from Octanove, and about 20 capitalised words from our own
  list (below). Cite:
  The CEFR-J Wordlist Version 1.5. Compiled by Yukio Tono, Tokyo University of Foreign Studies (© Tono Laboratory, TUFS).
  Originally distributed at http://www.cefr-j.org/download.html; retrieved on 2026-09-27 from
  https://github.com/openlanguageprofiles/olp-en-cefrj. Used with the permission of Prof. Yukio Tono (2026-10-10).
- **Octanove Vocabulary Profile C1/C2 1.0** (created by Octanove Labs) — word levels C1/C2. CC BY-SA 4.0
  (https://creativecommons.org/licenses/by-sa/4.0/).
  Same repository.
- **Word frequencies (Zipf, `entries.zipf`, `freq_bucket`) for English, and the German and Polish
  frequencies behind the translation order** are Krumeto's own, combined from (data/build_freq.py):
  Tatoeba sentences (CC BY 2.0 FR, above); word counts of the English (dump 2023-04-13), German
  and Polish (dumps 2022-08-29) Wikipedia,
  computed by Ilya Semenov, https://github.com/IlyaSemenov/wikipedia-word-frequency
  (MIT License, (c) 2015 Ilya Semenov; text in the notices) — Wikipedia text by Wikipedia
  contributors, CC BY-SA 3.0 at the time of these dumps (adaptations may use CC BY-SA 4.0,
  https://creativecommons.org/licenses/by-sa/4.0/); and the Google
  Books Ngram Viewer 1-grams, version 3 (20200217), English and German, CC BY 3.0
  (https://creativecommons.org/licenses/by/3.0/), http://storage.googleapis.com/books/ngrams/books/datasetsv3.html —
  cite: Jean-Baptiste Michel et al. (2011), Quantitative Analysis of Culture Using Millions
  of Digitized Books, Science 331(6014): 176-182. SUBTLEX is not used.
- **wordfreq** (Robyn Speer) — word frequencies for the translation languages uk, ru, es, fr,
  it, pt, tr only (order of translations; no English/German/Polish values, no SUBTLEX data).
  Data CC BY-SA 4.0 (code Apache-2.0); for these languages it includes OpenSubtitles 2018
  word counts (Lison & Tiedemann 2016). Cite: Robyn Speer (2022). rspeer/wordfreq: v3.0
  (v3.0.2). Zenodo. https://doi.org/10.5281/zenodo.7199437 · https://github.com/rspeer/wordfreq
- **CMUdict** — fallback US pronunciations (converted from ARPAbet to IPA). BSD-2-Clause;
  Copyright (C) 1993-2015 Carnegie Mellon University, licence text and disclaimer in the notices.
  https://github.com/cmusphinx/cmudict
- **Wikimedia Commons** — references to pronunciation recordings (`pron.audio_url`,
  `audio_file`, `audio_page`) and, where we resolved them, each recording's author and
  licence (`audio_credit`, `audio_license`). The recordings themselves are not in this
  dump; each is under its own licence (CC BY / CC BY-SA versions, CC0, public domain,
  Free Art License). Rows without a licence are either unresolved or under a licence we do
  not use (e.g. GFDL alone); Krumeto does not play them — check the Commons file page
  before using such a recording. https://commons.wikimedia.org

## Krumeto's own data in this dump (CC BY-SA 4.0, as part of the compilation)

- Levels of about 20 capitalised words that the CEFR-J and Octanove lists do not
  contain (languages and nationalities such as English, French, Ukrainian; holidays
  such as Christmas, Easter): our own editorial estimates, not copied from any
  third-party list (`EXTRA` in `data/capitalized.py`). Capitalised words that CEFR-J
  does list (Mr, Mrs, Ms, Dr, Mum, Dad, Christian) carry their CEFR-J level and fall
  under the CEFR-J terms above.
- The grammar lesson index (titles, short summaries, levels, links between words and
  lessons). We use the CEFR-J Grammar Profile (© Tono Lab) as one reference for the
  order and levels of lessons; the final order and levels are our own decisions and
  no Grammar Profile text is included. The full lesson texts are not part of this dump.

## Notices

The full licence texts and notices these sources require to travel with every copy
(Princeton WordNet, CMUdict BSD-2-Clause with its disclaimer, the wordfreq NOTICE, the
MIT licence of the Wikipedia word counts, …) are in `THIRD_PARTY_NOTICES.txt`, published next to this file — always
redistribute it together with the dump. Both this file and `THIRD_PARTY_NOTICES.txt` are
also stored inside the database, in the table `license_notice` (columns `name`, `text`);
keep that table in every copy. Full citations: https://krumeto.com/sources

Krumeto is an independent project and is not affiliated with, sponsored or endorsed
by any of the sources, authors or organisations named above.
The website code is not part of this dump.

SHA-256 of the uncompressed database: 5206323a22c882569170c9ff09946d755ec613829c3ba45bf38347cad774f03e
