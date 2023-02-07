import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
// import { bindActionCreators } from 'redux';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter
      number={number}
      onIncrease={increase}
      onDecrease={decrease}
    />
  );
};

// 📌 mapStateToProps, mapDispatchToProps 사용하기
// // 스토어의 현재 상태
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// // 액션 생성 함수
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// 📌 mapStateToProps, mapDispatchToProps 사용하기
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// connect 함수 내부에 익명 함수로 선언하기
export default connect(
  state => ({
    number: state.counter.number,
  }),
  // 1️⃣ 액션 생성 함수로 이루어진 객체를 넣을 때 - connect 함수가 내부적으로 bindActionCreators 작업 대신 진행
  {
    increase,
    decrease,
  }

  // 2️⃣ bindActionCreators 사용할 때
  // dispatch =>
  //   bindActionCreators({
  //     increase,
  //     decrease,
  //   },
  //     dispatch,
  //   ),

  // 3️⃣ bindActionCreators 사용하지 않을 때
  // dispatch => ({
  //   increase: () => dispatch(increase()),
  //   decrease: () => dispatch(decrease()),
  // }),
)(CounterContainer);

