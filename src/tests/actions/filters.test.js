import moment from 'moment';
import {setStartDate,setEndDate,sortByAmount,sortByDate,setTextFilter} from '../../actions/filters';

test('should setup set start date',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    })
})

test('should set up set end date',()=>{
    const action = setEndDate(moment())
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : moment()
    })
})

test('sould setup sortBy date',()=>{
    const action = sortByDate()
    expect(action).toEqual({type:'SORT_BY_DATE'})
})
test('should sort by amount',()=>{
    const action = sortByAmount()
    expect(action).toEqual({type:'SORT_BY_AMOUNT'})
})
test('should set text filter ',()=>{
    const action = setTextFilter({text : ''})
    expect(action).toEqual({
        type :'SET_TEXT_FILTER',
        text : ''
    })
})