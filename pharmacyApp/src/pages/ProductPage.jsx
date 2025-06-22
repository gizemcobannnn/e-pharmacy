export default function ProductPage() {
  return (
    <div>
      <div className="flex flex-col">
        <img src="" alt="" />
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <p>name</p>
            <p>Brand:</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <button>+ {name} -</button> <button>Add to cart</button>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-2">
          <button>Description</button>
          <button>Reviews</button>
        </div>
        <div className="flex text-justify">Description</div>
      </div>
    </div>
  );
}
