import { HtmlContext } from "next/dist/shared/lib/html-context"
import { Html } from "next/document"
import { render } from "react-dom";
import Box from "./box"

export default function LeftSide() {
    
    var result = document.createElement('div');
    var draw = ""
    for (var i = 0 ; i < 5; i++) {
        draw += `<Box status="ACTIVE"></Box>`
    }
    result.innerHTML = draw
    console.log(result)
    return (
        <div>{result}</div>
    )
}