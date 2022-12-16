import { useLocation } from "react-router-dom"

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")

  return (
    <div>
      <h2>Hi {name}, Contact us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem quisquam velit possimus accusantium! Hic, ullam quam accusamus sed aperiam iste illo, quidem accusantium ex totam fuga libero et est!</p>
    </div>
  )
}
