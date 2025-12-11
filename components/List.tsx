export interface ListType  {
    listItem:any;
}
const List = ({listItem}:ListType) => {
  return (
    <li className="cursor-pointer hover:text-[#fafafa] list-none text-white">{listItem}</li>
  )
}

export default List