let angle = 0,
    angle1 = 0,
    angle2 = 0,
    angle3 = 0

function RotateSVG() {
    let protect = document.getElementById("protect"),
        arrow1 = document.getElementById("arrow1"),
        arrow2 = document.getElementById("arrow2"),
        arrow3 = document.getElementById("arrow3")

    setInterval(
        function () {
            angle += 1
            angle1 += 2
            angle2 += 2
            angle3 += 1
            protect.setAttribute("transform", `rotate(${angle})`)
            arrow1.setAttribute("transform", `rotate(${angle1})`)
            arrow2.setAttribute("transform", `rotate(${angle2})`)
            arrow3.setAttribute("transform", `rotate(${angle3})`)
        }, 50);
}