const TodoTile = ({ title }) => {
  return (
    <div className="border-[10px] flex items-center gap-[0.5rem]">
      <input type="checkbox" name="" id="" />
      <p>{title}</p>
    </div>
  );
};

export default TodoTile;
