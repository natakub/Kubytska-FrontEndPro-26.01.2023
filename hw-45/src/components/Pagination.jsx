import styles from "../css/Pagination.module.css";
import { connect } from "react-redux";
import { setCurrentPage } from "../redux/redux-thunk/actions";

const mapStateToProps = (state) => {
  return {
    currentPage: state.tasks.meta.currentPage,
    limit: state.tasks.limit,
    total: state.tasks.total,
  };
};

function Pagination(props) {
  const pagesCount = Math.ceil(props.total / props.limit);

  const pages = [];

  const createPages = () => {
    if (pagesCount > 0) {
      pages.push(...Array.from({ length: pagesCount }, (_, i) => i + 1));
    }
  };

  const handleCurrentPage = (page) => {
    createPages();
    props.setCurrentPage(page);
  };

  return (
    <ul className="pagination">
      {pages.map((page, id) => (
        <li
          key={id}
          className={
            props.currentPage === page
              ? `${styles["current-page"]}`
              : `${styles.page}`
          }
          onClick={() => handleCurrentPage(page)}
        >
          {page}
        </li>
      ))}
    </ul>
  );
}

export default connect(mapStateToProps, { setCurrentPage })(Pagination);
