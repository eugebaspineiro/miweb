const CategoryFilter = ({ categorySelected, setCategorySelected }) => {
  return (
    <div className="chip-container">
      <p
        className={`chip ${categorySelected === "ux-ui" ? "active" : ""}`}
        onClick={() => setCategorySelected("ux-ui")}
      >
        Diseño
      </p>
     
      <p
        className={`chip ${categorySelected === "dev" ? "active" : ""}`}
        onClick={() => setCategorySelected("dev")}
      >
        Frontend
      </p>
    </div>
  );
};

export default CategoryFilter;