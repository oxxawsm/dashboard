import { useDispatch } from 'react-redux';
import { CONFIRMATION_MODAL_CLOSE_TYPES } from '../utils/constants'
import { deleteTeamMember } from '../slices/teamSlice'
import { showNotification } from '../slices/headerSlice'

function ConfirmationModal({ extraObject, closeModal }) {

    const dispatch = useDispatch()

    const { message, type, _id, index } = extraObject


    const proceedWithYes = async () => {
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_TEAM_MEMBER) {
            dispatch(deleteTeamMember({ index }))
            dispatch(showNotification({ message: "Сотрудник удалён из списка", status: 1 }))
        }
        closeModal()
    }

    return (
        <>
            <p className=' text-xl mt-8 text-center'>
                {message}
            </p>

            <div className="modal-action mt-12">

                <button className="btn btn-outline   " onClick={() => closeModal()}>Отмена</button>

                <button className="btn btn-primary w-36" onClick={() => proceedWithYes()}>Да</button>

            </div>
        </>
    )
}

export default ConfirmationModal;
