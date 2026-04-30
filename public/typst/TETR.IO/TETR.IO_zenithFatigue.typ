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
  let text-fill = color.rgb("#FFFFFF")
  let fill = color.rgb("#801346")

  if (type == "the-end") {
    text-fill = color.rgb("#FFFFFF")
    fill = color.rgb("#870815")
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

#let zenithFatigue = (
  (
    time: "08:00",
    type: "",
    message: "FATIGUE SETS IN…",
    penalty: "+2 PERMANENT LINES",
    code: "['unclearable'], ['shake', 5],",
    codeSupplement: "×2",
  ),
  (
    time: "09:00",
    type: "",
    message: "YOUR BODY GROWS WEAK…",
    penalty: "receive 25% more garbage",
    code: "['receivemultiplier', 0.25],",
    codeSupplement: "",
  ),
  (
    time: "10:00",
    type: "",
    message: "ALL SENSES BLUR TOGETHER…",
    penalty: "+3 PERMANENT LINES",
    code: "['unclearable'], ['shake', 5],",
    codeSupplement: "×3",
  ),
  (
    time: "11:00",
    type: "",
    message: "YOUR CONSCIOUSNESS FADES…",
    penalty: "receive 25% more garbage",
    code: "['receivemultiplier', 0.25],",
    codeSupplement: "",
  ),
  (
    time: "12:00",
    type: "the-end",
    message: "THIS IS THE END.",
    penalty: "+5 PERMANENT LINES",
    code: "['unclearable'], ['shake', 5],",
    codeSupplement: "×5",
  ),
)

#let zenithFatigue-formatted = ()

#for fatigueItem in zenithFatigue {
  zenithFatigue-formatted.push(
    table.cell[#time(fatigueItem.time)],
  )
  zenithFatigue-formatted.push(
    table.cell[
      #fatigue(type: fatigueItem.type)[
        #fatigueItem.message
        \
        #text(size: 0.8em)[#fatigueItem.penalty]
      ]
    ],
  )
  zenithFatigue-formatted.push(
    table.cell[
      #raw(lang: "js", fatigueItem.code)
      #text()[#fatigueItem.codeSupplement]
    ],
  )
  // zenithFatigue-formatted.push(
  //   table.cell[#fatigueItem.codeSupplement],
  // )
}

#text(font: "HUN")[
  #set par(spacing: 0.5em)
  #set text(fill: white)
  #stack(
    dir: ltr,
    // [= TETR.IO],
    [#h(1fr)],
    [= QUICK PLAY],
  )
  #set text(size: 0.8em)
  #h(1fr)
  scale the tower!
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

  ..zenithFatigue-formatted,
)
