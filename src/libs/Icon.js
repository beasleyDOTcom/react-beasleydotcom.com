export default function Icon(props)
{
return 
(
<a alt = {"icon for "+ props.text } href={ props.url }>{ props.text } {props.imgurl}</a>
)
}