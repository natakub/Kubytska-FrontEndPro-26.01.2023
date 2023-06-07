import styles from "../css/Pagination.module.css";
import { connect } from "react-redux";
import { setCurrentPage } from "../redux/redux-thunk/actions";

const mapStateToProps = (state) => {
  return {
    currentPage: state.tasks.meta.currentPage,
    limit: state.tasks.meta.limit,
    total: state.tasks.meta.total,
  };
};

function Pagination(props) {
  const { currentPage, limit, total, setCurrentPage } = props;

  if (total <= 5) {
    return null;
  }

  const pagesCount = Math.ceil(total / limit);

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  // const handleSetPage = (page) => setCurrentPage(page);

  return (
    <div className="pagination">
      {pages.map((page) => {
        const isCurrent = page === currentPage;
        const onClickPage = (event) => {
          event.preventDefault();
          setCurrentPage(page);
        };
        return (
          <span
            key={page}
            className={
              isCurrent ? `${styles["current-page"]}` : `${styles.page}`
            }
            onClick={onClickPage}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
}

export default connect(mapStateToProps, { setCurrentPage })(Pagination);
