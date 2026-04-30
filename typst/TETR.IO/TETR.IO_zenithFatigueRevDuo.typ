#set page(
  margin: 1em,
  width: 65.7em,
  height: auto,
  fill: color.rgb("#111"),
)
#set par(
  leading: 0.5em,
)
#set text(
  font: "Config",
  fill: color.hsl(0deg, 0%, 80%),
  tracking: 0.6pt,
)
#set smartquote(
  enabled: false,
)
#show raw: set text(font: "ProFontWindows", size: 1.25em)

#let time(body) = {
  text(font: "7-Segment", size: 1.25em)[#body]
}

#let fatigue(
  body,
  type: "",
  inset: 0.25em,
  point-scale: .28,
) = context {
  let text-fill = black
  let fill = gray

  if (type == "conflict") {
    text-fill = color.rgb("#ff006f")
    fill = color.rgb("#420a25")
  } else if (type == "hope") {
    text-fill = color.rgb("#ffb700")
    fill = color.rgb("#421d04")
  } else if (type == "divorce") {
    text-fill = color.rgb("#ff2600")
    fill = black
  }

  set text(
    font: "HUN",
    fill: text-fill,
  )

  // 1. Measure dimensions
  let size = measure(
    text(font: "HUN")[#body],
  )

  // 2. Calculate geometric points
  let h = size.height + (inset * 2.5)
  let point-width = h * point-scale
  let inner-w = size.width + (inset * 12)
  let total-w = inner-w + (point-width * 2)

  // Explicitly define the coordinates for clarity
  let p1 = (point-width, 0pt)
  let p2 = (point-width + inner-w, 0pt)
  let p3 = (total-w, h / 2)
  let p4 = (point-width + inner-w, h)
  let p5 = (point-width, h)
  let p6 = (0pt, h / 2)

  // 3. Render using the curve element
  box(
    width: total-w,
    height: h,
    {
      place(curve(
        fill: fill,
        stroke: none,
        curve.move(p1),
        curve.line(p2),
        curve.line(p3),
        curve.line(p4),
        curve.line(p5),
        curve.line(p6),
        curve.line(p1),
      ))
      place(center + horizon, body)
    },
  )
}

#let zenithFatigueRevDuo = (
  (
    time: "01:00",
    type: "conflict",
    message: "THE RELATIONSHIP STAGNATES…",
    penalty: "garbage becomes a bit messier",
    code: "['messiness', 0.05],",
    codeSupplement: "",
  ),
  (
    time: "01:30",
    type: "conflict",
    message: "INSECURITIES GROW STRONGER…",
    penalty: "garbage becomes messier",
    code: "['messiness', 0.15],",
    codeSupplement: "",
  ),
  (
    time: "02:00",
    type: "conflict",
    message: "%p2 FEELS NEGLECTED…",
    penalty: "garbage becomes much messier",
    code: "['messiness', 0.3],",
    codeSupplement: "",
  ),
  (
    time: "02:30",
    type: "hope",
    message: "%p1 SUCCESSFULLY APOLOGIZES…?",
    penalty: "garbage becomes a bit cleaner",
    code: "['messiness', 0.2], ['rerollcolumn'],",
    codeSupplement: "",
  ),
  (
    time: "03:00",
    type: "hope",
    message: "THINGS ARE BACK TO HOW THEY SHOULD BE…!",
    penalty: "garbage becomes much cleaner",
    code: "['messiness', 0], ['rerollcolumn'],",
    codeSupplement: "",
  ),
  (
    time: "03:30",
    type: "conflict",
    message: "THE WEIGHT OF WORDS UNSPOKEN…",
    penalty: "garbage becomes messier",
    code: "['messiness', 0.1],",
    codeSupplement: "",
  ),
  (
    time: "04:00",
    type: "conflict",
    message: "\"WHY CAN'T YOU JUST LISTEN TO ME?\"",
    penalty: "garbage becomes much messier",
    code: "['messiness', 0.25],",
    codeSupplement: "",
  ),
  (
    time: "04:30",
    type: "conflict",
    message: "\"THIS IS ALL YOUR FAULT\".",
    penalty: "revive difficulty increased",
    code: "['revivelevel', 3],",
    codeSupplement: "",
  ),
  (
    time: "05:00",
    type: "hope",
    message: "%p2 MAKES THE SAME PROMISE AGAIN…",
    penalty: "garbage becomes cleaner",
    code: "['messiness', 0.1], ['rerollcolumn'],",
    codeSupplement: "",
  ),
  (
    time: "05:30",
    type: "conflict",
    message: "\"THIS TIME WILL BE DIFFERENT.\"",
    penalty: "+4 PERMANENT GARBAGE",
    code: "['unclearable'], ['shake', 5],",
    codeSupplement: "×4",
  ),
  (
    time: "06:00",
    type: "conflict",
    message: "SOME HABITS CAN'T BE BROKEN…",
    penalty: "garbage becomes much messier",
    code: "['messiness', 0.3],",
    codeSupplement: "",
  ),
  (
    time: "06:30",
    type: "conflict",
    message: "ALL TRUST HAS WITHERED AWAY…",
    penalty: "garbage becomes messier",
    code: "['messiness', 0.4],",
    codeSupplement: "",
  ),
  (
    time: "07:00",
    type: "conflict",
    message: "%p1 SETS AN ULTIMATUM…",
    penalty: "garbage becomes messier",
    code: "['messiness', 0.5],",
    codeSupplement: "",
  ),
  (
    time: "07:30",
    type: "conflict",
    message: "%p2 CONTEMPLATES THEIR WASTED EFFORT…",
    penalty: "garbage becomes messier",
    code: "['messiness', 0.6],",
    codeSupplement: "",
  ),
  (
    time: "08:00",
    type: "conflict",
    message: "ONE LAST PAINFUL ARGUMENT…",
    penalty: "receive 25% more garbage",
    code: "['receivemultiplier', 0.25],",
    codeSupplement: "",
  ),
  (
    time: "08:30",
    type: "divorce",
    message: "GOODBYE.",
    penalty: "you can no longer revive",
    code: "['norevive'],",
    codeSupplement: "Clear two O-Spin Mini Doubles consecutively",
  ),
  (
    time: "09:30",
    type: "hope",
    message: "\"I MISS YOU\"",
    penalty: "garbage becomes much cleaner",
    code: "['messiness', 0.2], ['rerollcolumn'],",
    codeSupplement: "",
  ),
  (
    time: "10:00",
    type: "hope",
    message: "WHAT IF…?",
    penalty: "garbage becomes a bit cleaner",
    code: "['messiness', 0.1], ['rerollcolumn'],",
    codeSupplement: "",
  ),
  (
    time: "10:30",
    type: "divorce",
    message: "…",
    penalty: "+12 PERMANENT LINES",
    code: "['unclearable'], ['shake', 10],",
    codeSupplement: "×12",
  ),
)

#let zenithFatigueRevDuo-formatted = ()

#for fatigueItem in zenithFatigueRevDuo {
  zenithFatigueRevDuo-formatted.push(
    table.cell[#time(fatigueItem.time)],
  )
  zenithFatigueRevDuo-formatted.push(
    table.cell[
      #fatigue(type: fatigueItem.type)[
        #fatigueItem.message
        \
        #text(size: 0.8em)[#fatigueItem.penalty]
      ]
    ],
  )
  zenithFatigueRevDuo-formatted.push(
    table.cell[
      #raw(lang: "js", fatigueItem.code)
      #text()[#fatigueItem.codeSupplement]
    ],
  )
  // zenithFatigueRevDuo-formatted.push(
  //   table.cell[#fatigueItem.codeSupplement],
  // )
}

#text(font: "HUN")[
  #set par(spacing: 0.5em)
  #set text(fill: white)
  #stack(
    dir: ltr,
    [= BLEEDING HEARTS],
    [#h(1fr)],
    [#scale(y: -100%)[= QUICK PLAY]],
  )
  #set text(size: 0.8em)
  even as we bleed, we keep holding on…
  #h(1fr)
  overthrow the tower!
]

#table(
  columns: (auto, 1fr, 1fr),
  align: (
    end + horizon,
    center + horizon,
    start + horizon,
  ),
  stroke: none,
  fill: (x, y) => {
    if calc.odd(y) {
      color.hsl(0deg, 0%, 100%, 1%)
    }
  },

  table.header([mm:ss], [message], [effect(s)]),

  ..zenithFatigueRevDuo-formatted,
)
