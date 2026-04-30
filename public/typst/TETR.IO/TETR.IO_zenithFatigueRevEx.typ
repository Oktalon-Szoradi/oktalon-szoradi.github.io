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
  let text-fill = color.rgb("#ff006f")
  let fill = color.rgb("#420a25")

  if (type == "the-end") {
    text-fill = color.rgb("#ff2600")
    fill = color.rgb("#000000")
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

#let zenithFatigueRevEx = (
  (
    time: "06:00",
    type: "",
    message: "YOUR POWER SLIPS…",
    penalty: "garbage received becomes messier",
    code: "['gracestillmessy'],",
    codeSupplement: "",
  ),
  (
    time: "07:00",
    type: "",
    message: "WHISPERS OF DISCONTENT SPREAD…",
    penalty: "receive 25% more garbage",
    code: "['receivemultiplier', 0.25],",
    codeSupplement: "",
  ),
  (
    time: "08:00",
    type: "",
    message: "PROTESTERS LINE THE STREETS…",
    penalty: "+3 PERMANENT LINES",
    code: "['unclearable'], ['shake', 5],",
    codeSupplement: "×3",
  ),
  (
    time: "09:00",
    type: "",
    message: "YOUR CLOSEST ALLIES DEFECT…",
    penalty: "receive 25% more garbage",
    code: "['receivemultiplier', 0.25],",
    codeSupplement: "",
  ),
  (
    time: "10:00",
    type: "",
    message: "PARANOIA CLOUDS YOUR JUDGEMENT…",
    penalty: "+5 PERMANENT LINES",
    code: "['unclearable'], ['shake', 5],",
    codeSupplement: "×5",
  ),
  (
    time: "11:00",
    type: "",
    message: "THE REVOLUTION HAS BEGUN…",
    penalty: "garbage received becomes much messier",
    code: "['maxmessy'],",
    codeSupplement: "",
  ),
  (
    time: "12:00",
    type: "the-end",
    message: "THE END OF AN ERA.",
    penalty: "+12 PERMANENT LINES",
    code: "['unclearable'], ['shake', 10],",
    codeSupplement: "×12",
  ),
)

#let zenithFatigueRevEx-formatted = ()

#for fatigueItem in zenithFatigueRevEx {
  zenithFatigueRevEx-formatted.push(
    table.cell[#time(fatigueItem.time)],
  )
  zenithFatigueRevEx-formatted.push(
    table.cell[
      #fatigue(type: fatigueItem.type)[
        #fatigueItem.message
        \
        #text(size: 0.8em)[#fatigueItem.penalty]
      ]
    ],
  )
  zenithFatigueRevEx-formatted.push(
    table.cell[
      #raw(lang: "js", fatigueItem.code)
      #text()[#fatigueItem.codeSupplement]
    ],
  )
  // zenithFatigueRevEx-formatted.push(
  //   table.cell[#fatigueItem.codeSupplement],
  // )
}

#text(font: "HUN")[
  #set par(spacing: 0.5em)
  #set text(fill: white)
  #stack(
    dir: ltr,
    [= THE TYRANT],
    [#h(1fr)],
    [#scale(y: -100%)[= EXPERT QUICK PLAY]],
  )
  #set text(size: 0.8em)
  fear, oppression, and limitless ambition
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

  ..zenithFatigueRevEx-formatted,
)
