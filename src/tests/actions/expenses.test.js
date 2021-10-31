import { removeExpense,editExpense} from '../../actions/expenses';


test("should set up remove expense action object", () => {
    const action = removeExpense({ id: "123" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123"
    })
})

test('shoud set up edit textExpense' , ()=>{
    const edit = editExpense("A123",{note :'new edit note'})
    expect(edit).toEqual({
        type : "EDIT_EXPENSE",
        id :"A123",
        ubdates : {
            note :"new edit note"
        }

    })
})