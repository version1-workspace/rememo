import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainBody } from "../components/organisms/MainBody";
import { actionCreators } from "../actions";

const mapStateToProps = ({ cards, userCategories }: any) => {
  return {
    data: cards.data,
    userCategories,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    showModal,
    hideModal,
    fetchCards,
    postCard,
    checkCard,
    patchCard,
    deleteLink,
    createCategory,
    fetchCategory,
  } = actionCreators;
  return bindActionCreators(
    {
      showModal,
      hideModal,
      fetchCards,
      postCard,
      checkCard,
      patchCard,
      deleteLink,
      createCategory,
      fetchCategory,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
