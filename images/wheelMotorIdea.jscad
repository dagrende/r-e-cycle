function main() {
  let
    fn = 128,
    wheelD = 28 * 25.4,
    tireD = 30,
    falgW = 20,
    falgH= 10,
    motorH = 50,
    motorD = 40,
    axleL = 100
    axleD = 8,
    rubberWheelH = 5,
    rubberWheelD = 40;

    function motor() {
      return union(
        sphere().scale([rubberWheelD / 2, rubberWheelD / 2, rubberWheelH]),
        cylinder({r: axleD / 2, h: axleL, center: [true, true, false]})
          .translate([0, 0, -rubberWheelH / 2 - 2]),
        cylinder({r: motorD / 2, h: motorH, center: [true, true, false]})
          .translate([0, 0, axleL - motorH - rubberWheelH - 2])
      )
    }

  return union(
    torus({ri: tireD / 2, fni: 32, ro: (wheelD - tireD) / 2, fno: fn}).setColor([0, 0, 0]),
    cylinder({r: wheelD / 2 - tireD, h: falgW, center: true, fn: fn})
      .subtract(cylinder({r: (wheelD) / 2 - tireD - falgH, h: falgW, center: true, fn: fn})),
    motor().rotateX(90).translate([0, (wheelD - falgH) / 2 - tireD, (falgW + rubberWheelD) / 2])
  )
    .scale(0.1)
}
