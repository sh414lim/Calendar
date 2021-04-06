//새로운 항목을 입력하고 추가할 수 있는 컴포넌트이다
//state를 통해 인풋의 상태를 관리한다
import React, { useState,useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert=({onInsert})=>{
    const [value,setValue]= useState('');

    const onChange=useCallback(e=>{
        setValue(e.target.value)
    },[])

    const onSubmit=useCallback(
        e=>{
            onInsert(value);
            setValue('') //value 값 초기화
            e.preventDefault();
        },
        [onInsert,value],
    );
    //submit 이벤트는 브라우저에서 새로고침을 발생시킨다
    //이를 방지하기 위해 이 함수를  호출한다

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요"
            value={value}
            
            onChange={onChange}
            />
            

            <button type ="submit">
                <MdAdd/>  {/* react-icons 아이콘을 사용 페이지에 들어가면 수많은 아이콘과 이름이 나온다 여기서 아이콘을 고른 다음 import 구문으로 불러서 이용 */}
            </button>
        </form>
    )
}

export default TodoInsert;
