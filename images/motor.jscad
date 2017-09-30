function main() {
  let
    motorH = 50,
    motorD = 40,
    axleL = 100
    axleD = 8,
    rubberWheelH = 3,
    bubberWheelD = 40;
  return union(
    sphere().scale([bubberWheelD / 2, bubberWheelD / 2, 3]),
    cylinder({r: axleD / 2, h: axleL, center: [true, true, false]}).translate([0, 0, -rubberWheelH / 2 - 2]),
    cylinder({r: motorD / 2, h: motorH, center: [true, true, false]})
      .translate([0, 0, axleL - motorH - rubberWheelH - 2])
  )

}
