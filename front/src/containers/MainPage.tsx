import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainPage } from "../components/templetes/MainPage";
import { actionCreators } from "../actions";

const mapStateToProps = ({ cards }: any) => {
  return {
    data: cards.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      showModal: actionCreators.showModal,
      hideModal: actionCreators.hideModal,
      fetchCards: actionCreators.fetchCards,
      postCard: actionCreators.postCard,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
