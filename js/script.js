const WORD_LIST = ["about", "above", "abuse", "actor", "acute", "admit", "adobe", "adopt", "adult", "after", "again", "agent", "agree", "ahead", "alarm", "album", "alert", "alien", "align", "alike", "alive", "alley", "allow", "alone", "along", "alter", "angel", "anger", "angle", "angry", "anime", "ankle", "annex", "antic", "anvil", "apart", "apple", "apply", "april", "apron", "arena", "argue", "arise", "armor", "aroma", "arose", "array", "arrow", "artsy", "ascot", "asked", "asset", "atlas", "attic", "audio", "audit", "avail", "avoid", "awake", "award", "aware", "awful", "azure", "bacon", "badge", "badly", "bagel", "baker", "basic", "basis", "batch", "beach", "beard", "beast", "beats", "began", "begin", "being", "below", "bench", "berry", "birth", "bison", "biter", "black", "blade", "blame", "bland", "blank", "blast", "blaze", "bleed", "blend", "bless", "blind", "bliss", "block", "blood", "bloom", "blown", "blues", "blunt", "blurb", "board", "boost", "booth", "bound", "boxer", "brain", "brand", "brave", "bread", "break", "bribe", "brick", "bride", "brief", "brine", "bring", "brink", "brisk", "broad", "broke", "brood", "brown", "brunt", "brush", "buddy", "buffs", "build", "built", "bulge", "bully", "bunch", "burst", "buyer", "byway", "cadet", "camel", "candy", "cargo", "carry", "carve", "caste", "catch", "cause", "cedar", "chain", "chair", "chaos", "charm", "chart", "chase", "cheap", "check", "cheek", "chess", "chest", "chief", "child", "chill", "china", "choir", "choke", "chord", "chose", "chunk", "civic", "civil", "clank", "clash", "clasp", "class", "clean", "clear", "clerk", "click", "cliff", "cling", "clock", "clone", "close", "cloth", "cloud", "clout", "clown", "clump", "coach", "coast", "cobra", "comet", "comic", "comma", "coral", "couch", "cough", "could", "count", "court", "cover", "crack", "cramp", "crane", "crash", "crazy", "creek", "creep", "crisp", "crook", "cross", "crowd", "crown", "cruel", "crumb", "crush", "crust", "curve", "cyber", "cycle", "daddy", "daisy", "dance", "datum", "deals", "decay", "delay", "delta", "dense", "depot", "derby", "devil", "diary", "digit", "dirty", "disco", "ditzy", "divert", "dixie", "dizzy", "dodge", "doing", "domino", "donor", "doubt", "dough", "dowdy", "draft", "drain", "drama", "drawl", "dread", "dream", "drill", "drink", "drive", "drool", "droop", "drove", "drums", "drunk", "dryer", "duchy", "dully", "dunce", "dying", "eager", "early", "earth", "eight", "elect", "elite", "ember", "empty", "enjoy", "enter", "entry", "equal", "error", "essay", "evade", "event", "every", "evoke", "exact", "exert", "exile", "exist", "extra", "fable", "facet", "fancy", "fauna", "feast", "feels", "fetch", "fever", "fiery", "fifth", "fifty", "fight", "final", "flame", "flank", "flare", "flash", "flask", "fleet", "flesh", "fleet", "flair", "flora", "flour", "flown", "flunk", "fly", "focal", "foggy", "folly", "force", "forge", "forth", "forum", "found", "frame", "frank", "fraud", "freed", "fresh", "front", "frost", "froze", "fungi", "funny", "gamer", "genre", "ghoul", "giant", "given", "gizmo", "glare", "glaze", "gleam", "glide", "glint", "gloom", "glory", "glyph", "gnome", "going", "golem", "goose", "grace", "grail", "graft", "grasp", "grave", "graze", "greed", "greet", "grief", "grime", "grind", "groan", "grope", "gross", "group", "grove", "grown", "grunt", "guava", "guile", "guise", "gusto", "gusts", "gypsy", "habit", "handy", "happy", "harsh", "haven", "hazel", "heady", "heart", "heavy", "hedge", "heist", "hence", "herbs", "hinge", "hippo", "hoary", "holly", "honey", "honor", "horde", "hotel", "hover", "humid", "humor", "hurly", "hyena", "icily", "ideal", "idiom", "igloo", "image", "irate", "irony", "ivory", "jaunt", "jazzy", "jewel", "joust", "juice", "juicy", "jumbo", "juror", "karma", "kayak", "khaki", "kitty", "knack", "kneel", "knelt", "knobs", "knock", "knoll", "known", "label", "lance", "lanky", "laser", "latch", "later", "lofty", "lodge", "logic", "loner", "loopy", "lotus", "lowly", "lucid", "lucky", "lunar", "lusty", "lyric", "magic", "major", "maker", "manor", "maple", "march", "mirth", "medal", "media", "mercy", "merge", "merit", "metal", "micro", "midst", "minor", "minus", "mirth", "miser", "misty", "mixer", "mocha", "model", "moldy", "moose", "moral", "mossy", "motif", "motto", "mould", "mourn", "mouth", "mulch", "mummy", "murky", "music", "naive", "nerve", "never", "newly", "night", "nifty", "noble", "noise", "nomad", "nonce", "noted", "nudge", "nurse", "nymph", "oaken", "occur", "ocean", "offer", "often", "olive", "onset", "optic", "orbit", "order", "otter", "outdo", "oxide", "ozone", "paint", "panic", "paper", "paste", "patch", "pause", "peace", "peach", "pearl", "peril", "perky", "phase", "piano", "pilot", "pitch", "pixel", "pixie", "pizza", "place", "plain", "plait", "plane", "plank", "plant", "plaza", "plead", "pluck", "plumb", "plume", "plump", "plunge", "poker", "porch", "pour", "power", "press", "price", "prick", "pride", "prime", "print", "prior", "prism", "probe", "prone", "prong", "prowl", "prune", "psalm", "pudgy", "pulse", "punch", "puppy", "quake", "qualm", "queen", "query", "quest", "queue", "quirk", "quota", "quote", "rabbi", "radar", "rainy", "rally", "ranch", "range", "rapid", "raspy", "rebel", "refer", "regal", "reign", "relax", "relay", "relic", "repay", "repel", "resin", "rider", "ridge", "rifle", "rigid", "risky", "rival", "river", "rivet", "robin", "robot", "rocky", "rogue", "roomy", "rough", "route", "rover", "rowdy", "royal", "ruddy", "ruler", "rusty", "sadly", "saint", "salon", "salty", "salvo", "sandy", "sassy", "savvy", "scald", "scalp", "scant", "scare", "scorn", "scout", "scowl", "scram", "screw", "scrub", "seize", "sense", "serum", "seven", "shaft", "shake", "shall", "shame", "shape", "share", "shark", "sharp", "sheen", "shelf", "shell", "shift", "shine", "shirt", "shock", "shoot", "shore", "short", "shout", "siege", "sight", "silly", "since", "siren", "sixth", "sixty", "sized", "skill", "skimp", "slack", "slant", "slash", "sleep", "slice", "slide", "slime", "slimy", "sloth", "slunk", "slurp", "smack", "small", "smart", "smash", "smell", "smirk", "smock", "smoke", "snack", "snaky", "snare", "sneak", "sneer", "snide", "sniff", "snore", "snort", "solar", "solid", "solve", "sorry", "south", "spare", "spark", "spawn", "speak", "speed", "spell", "spend", "spill", "spine", "spite", "split", "spook", "spore", "spout", "spree", "sprig", "spunk", "squab", "squid", "stain", "stake", "stale", "stall", "stamp", "stand", "stark", "start", "stash", "state", "stays", "steal", "steel", "steep", "steer", "stern", "stiff", "sting", "stink", "stoic", "stone", "stoop", "store", "storm", "stout", "strap", "straw", "stray", "strut", "stuck", "study", "stuff", "stump", "stunt", "style", "suave", "sugar", "suite", "super", "surge", "swamp", "swarm", "swear", "sweat", "sweep", "sweet", "swept", "swirl", "sword", "swore", "table", "taunt", "taunt", "taste", "taunt", "tawny", "teach", "teeth", "tempt", "tense", "tepid", "testy", "their", "theme", "there", "these", "thing", "think", "thorn", "those", "three", "threw", "throw", "thrum", "tiara", "tiger", "tilts", "tipsy", "title", "tonal", "topaz", "torch", "toxic", "track", "trail", "train", "trait", "tramp", "trawl", "tread", "treat", "treed", "trend", "trick", "troop", "troth", "trout", "trove", "truce", "truck", "truly", "trump", "trunk", "truth", "tuber", "tulip", "tumor", "tuner", "twang", "tweak", "twirl", "twist", "tying", "ultra", "uncle", "under", "unify", "unite", "until", "usage", "usher", "vague", "valid", "valor", "value", "valve", "vapor", "vault", "vibrant", "vigor", "viper", "viral", "visor", "vivid", "vocal", "vodka", "voice", "voila", "voter", "vowel", "vulture", "wafer", "wager", "waltz", "waned", "wrath", "watch", "water", "weave", "weedy", "weird", "whale", "whack", "wheat", "wheel", "where", "which", "while", "whiff", "whirl", "whole", "whose", "widen", "witty", "women", "world", "worry", "worse", "worst", "worth", "would", "wring", "wrote", "yacht", "yield", "young", "youth", "zesty", "zippy", "zombi", "zodiac"];

let state = {
    word: '',
    puzzleName: '',
    maxGuesses: 6,
    currentGuess: [],
    guesses: [],
    gameOver: false,
    won: false,
    keyColors: {}
};

function encode(str) {
    return btoa(str.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ (13 + i % 7))).join(''));
}
function decode(str) {
    try {
        const raw = atob(str);
        return raw.split('').map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ (13 + i % 7))).join('');
    } catch { return null; }
}

function init() {
    const hash = window.location.hash.slice(1);
    if (hash) {
        const parts = hash.split('|');
        if (parts.length >= 2) {
            const word = decode(parts[0]);
            const name = decode(parts[1]);
            if (word && /^[a-zA-Z]{5}$/.test(word)) {
                state.word = word.toUpperCase();
                state.puzzleName = name || 'Wordle Challenge';
                showGameView();
                return;
            }
        }
    }
    document.getElementById('puzzle-name-display').textContent = 'Worble';
    setupCreatorListeners();
}

function setupCreatorListeners() {
    const wordInput = document.getElementById('word-input');
    const nameInput = document.getElementById('puzzle-name-input');
    const btn = document.getElementById('btn-create');
    function check() {
        btn.disabled = !(wordInput.value.length === 5 && /^[a-zA-Z]+$/.test(wordInput.value));
    }
    wordInput.addEventListener('input', check);
    nameInput.addEventListener('input', check);
}

function createPuzzle() {
    const word = document.getElementById('word-input').value.trim().toUpperCase();
    const name = document.getElementById('puzzle-name-input').value.trim() || 'Wordle Challenge';
    if (word.length !== 5 || !/^[A-Z]+$/.test(word)) {
        showToast('Word must be exactly 5 letters');
        return;
    }
    const encoded = encode(word) + '|' + encode(name);
    const url = window.location.href.split('#')[0] + '#' + encoded;
    document.getElementById('share-link-display').textContent = url;
    document.getElementById('share-box').classList.add('visible');
}

function copyLink() {
    const url = document.getElementById('share-link-display').textContent;
    navigator.clipboard.writeText(url).then(() => showToast('Link copied!')).catch(() => {
        document.getElementById('share-link-display').select?.();
        showToast('Copy the link above');
    });
}

function showGameView() {
    document.getElementById('view-creator').classList.remove('active');
    document.getElementById('view-game').classList.add('active');
    document.getElementById('puzzle-name-display').textContent = state.puzzleName;
    document.getElementById('game-meta').textContent = `${state.word.length} letters · ${state.maxGuesses} attempts`;
    buildBoard();
    buildKeyboard();
    document.addEventListener('keydown', handleKeyDown);
}

function buildBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    board.style.gridTemplateRows = `repeat(${state.maxGuesses}, var(--tile-size))`;
    for (let r = 0; r < state.maxGuesses; r++) {
        const row = document.createElement('div');
        row.className = 'board-row';
        row.id = `row-${r}`;
        row.style.gridTemplateColumns = `repeat(${state.word.length}, var(--tile-size))`;
        for (let c = 0; c < state.word.length; c++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${r}-${c}`;
            row.appendChild(tile);
        }
        board.appendChild(row);
    }
}

const KB_ROWS = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫']
];

function buildKeyboard() {
    const kb = document.getElementById('keyboard');
    kb.innerHTML = '';
    KB_ROWS.forEach(row => {
        const div = document.createElement('div');
        div.className = 'kb-row';
        row.forEach(k => {
            const btn = document.createElement('button');
            btn.className = 'key' + (k.length > 1 ? ' wide' : '');
            btn.textContent = k;
            btn.dataset.key = k;
            btn.addEventListener('click', () => handleInput(k));
            div.appendChild(btn);
        });
        kb.appendChild(div);
    });
}

function handleKeyDown(e) {
    if (state.gameOver) return;
    if (e.key === 'Enter') handleInput('ENTER');
    else if (e.key === 'Backspace') handleInput('⌫');
    else if (/^[a-zA-Z]$/.test(e.key)) handleInput(e.key.toUpperCase());
}

function handleInput(key) {
    if (state.gameOver) return;
    if (key === '⌫') {
        if (state.currentGuess.length > 0) {
            state.currentGuess.pop();
            updateCurrentRow();
        }
        return;
    }
    if (key === 'ENTER') {
        submitGuess();
        return;
    }
    if (state.currentGuess.length < state.word.length) {
        state.currentGuess.push(key);
        updateCurrentRow();
        const row = state.guesses.length;
        const col = state.currentGuess.length - 1;
        const tile = document.getElementById(`tile-${row}-${col}`);
        tile.classList.add('pop');
        tile.addEventListener('animationend', () => tile.classList.remove('pop'), { once: true });
    }
}

function updateCurrentRow() {
    const row = state.guesses.length;
    for (let c = 0; c < state.word.length; c++) {
        const tile = document.getElementById(`tile-${row}-${c}`);
        tile.textContent = state.currentGuess[c] || '';
        tile.className = 'tile' + (state.currentGuess[c] ? ' filled' : '');
    }
}

function submitGuess() {
    const row = state.guesses.length;
    if (state.currentGuess.length !== state.word.length) {
        shakeRow(row);
        setInvalidMsg('Not enough letters');
        return;
    }
    const guess = state.currentGuess.join('');
    setInvalidMsg('');
    const result = scoreGuess(guess, state.word);
    state.guesses.push({ guess, result });
    revealRow(row, guess, result);
    state.currentGuess = [];

    const won = result.every(r => r === 'correct');
    if (won || state.guesses.length === state.maxGuesses) {
        state.gameOver = true;
        state.won = won;
        setTimeout(() => showEndScreen(), 1700);
    }
}

function scoreGuess(guess, word) {
    const result = Array(word.length).fill('absent');
    const wordArr = word.split('');
    const guessArr = guess.split('');
    const used = Array(word.length).fill(false);
    guessArr.forEach((l, i) => {
        if (l === wordArr[i]) { result[i] = 'correct'; used[i] = true; }
    });
    guessArr.forEach((l, i) => {
        if (result[i] === 'correct') return;
        const j = wordArr.findIndex((wl, wi) => wl === l && !used[wi]);
        if (j !== -1) { result[i] = 'present'; used[j] = true; }
    });
    return result;
}

function revealRow(rowIdx, guess, result) {
    const delay = 300;
    result.forEach((res, col) => {
        const tile = document.getElementById(`tile-${rowIdx}-${col}`);
        setTimeout(() => {
            tile.classList.add('flip');
            tile.addEventListener('animationend', () => {
                tile.classList.remove('flip');
                tile.classList.add(res);
            }, { once: true });
        }, col * delay);
    });
    setTimeout(() => {
        guess.split('').forEach((letter, col) => {
            const key = document.querySelector(`.key[data-key="${letter}"]`);
            if (!key) return;
            const priority = { correct: 3, present: 2, absent: 1 };
            const cur = key.className.match(/correct|present|absent/)?.[0];
            if (!cur || priority[result[col]] > priority[cur]) {
                key.classList.remove('correct', 'present', 'absent');
                key.classList.add(result[col]);
            }
        });
    }, state.word.length * delay + 200);
}

function shakeRow(row) {
    const rowEl = document.getElementById(`row-${row}`);
    rowEl.querySelectorAll('.tile').forEach(t => {
        t.classList.add('shake');
        t.addEventListener('animationend', () => t.classList.remove('shake'), { once: true });
    });
}

function setInvalidMsg(msg) {
    document.getElementById('invalid-msg').textContent = msg;
    if (msg) setTimeout(() => setInvalidMsg(''), 1500);
}

function showEndScreen() {
    const es = document.getElementById('end-screen');
    es.classList.add('visible');
    if (state.won) {
        document.getElementById('end-title').textContent = ['Genius!', 'Brilliant!', 'Impressive!', 'Splendid!', 'Great!', 'Phew!'][state.guesses.length - 1] || 'You got it!';
    } else {
        document.getElementById('end-title').textContent = 'Better luck next time';
    }
    document.getElementById('end-word').textContent = `The word was ${state.word}`;
    document.getElementById('stat-guesses').textContent = state.won ? state.guesses.length : 'X';
    document.getElementById('result-grid').textContent = buildResultGrid();
}

function buildResultGrid() {
    const squares = { correct: '🟩', present: '🟨', absent: '⬛' };
    return state.guesses.map(({ result }) => result.map(r => squares[r]).join('')).join('\n');
}

function shareResult() {
    const grid = buildResultGrid();
    const score = state.won ? `${state.guesses.length}/${state.maxGuesses}` : `X/${state.maxGuesses}`;
    const url = window.location.href;
    const text = `${state.puzzleName}\n${score}\n\n${grid}\n\n${url}`;
    // if (navigator.share) {
    //     navigator.share({ text }).catch(() => copyToClipboard(text));
    // } else {
        copyToClipboard(text);
        showToast('Result copied to clipboard!');
    // }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => showToast('Result copied!')).catch(() => { });
}

function resetGame() {
    document.getElementById('end-screen').classList.remove('visible');
    state.gameOver = false;
    state.won = false;
    state.currentGuess = [];
    state.guesses = [];
    state.keyColors = {};
    buildBoard();
    buildKeyboard();
}

function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2200);
}

init();