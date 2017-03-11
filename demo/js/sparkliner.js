class Sparkliner {

  // Customizable parameters for a sparkline
  constructor () {
    this.width = 0
    this.height = 0
    this.points = ""
    this.id = "container"
    this.customSvgStyle = ""
    this.strokeColor = "#000"
    this.strokeWidth = 1
    this.circleX = 0
    this.circleY = 0
    this.circleShow = true
    this.circleColor = "#ff0000"
    this.circleRadius = 6
  }

  // Create method
  create(array) {
    var widthContainer = document.getElementById(this.id).clientWidth
    var heightContainer = document.getElementById(this.id).clientHeight
    var stepX = widthContainer / (array.length - 1)
    var stepY = heightContainer / (Math.max(...array) - Math.min(...array))

    // Generate SVG and put it to a html element by its ID
    document.getElementById(this.id).innerHTML = `
      <svg id="sparkSvg">
        <polyline id="sparkPolyline" points="";
                  style=""
        />
        <circle id="sparkCircle" cx="" cy="" r="" fill="" />
      </svg>
    `

    // Create coordinates for a sparkline polyline
    for (var i = 0; i < array.length; i++) {
      this.points += stepX * i + " " + (heightContainer - (array[i] * stepY) + (Math.min(...array)*stepY)) + ","
    }

    // Define coordinates for a sparkline circle
    this.circleX = widthContainer
    this.circleY = heightContainer - (array[array.length - 1] * stepY) + (Math.min(...array)*stepY)

    // Remove a coma from points string
    this.points = this.points.substr(0, this.points.length-1)
    // Collect custom style for our sparkline polyline
    this.customSvgStyle = "fill:none;stroke:" + this.strokeColor + ";stroke-width:" + this.strokeWidth

    // Set width and height for SVG container
    document.getElementById('sparkSvg').setAttribute('width', widthContainer)
    document.getElementById('sparkSvg').setAttribute('height', heightContainer)

    // Set a sparkline polyline
    document.getElementById('sparkPolyline').setAttribute('points', this.points)
    document.getElementById('sparkPolyline').setAttribute('style', this.customSvgStyle)

    // Show a circle marker or not
    if (this.circleShow == true) {
      // Set a sparkline circle
      document.getElementById('sparkCircle').setAttribute('cx', this.circleX)
      document.getElementById('sparkCircle').setAttribute('cy', this.circleY)
      document.getElementById('sparkCircle').setAttribute('r', this.circleRadius)
      document.getElementById('sparkCircle').setAttribute('fill', this.circleColor)
    }

  }

}
