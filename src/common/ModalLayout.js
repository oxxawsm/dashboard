import { MODAL_BODY_TYPES } from '../utils/constants'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../slices/modalSlice'
import AddTeamMemberModal from './AddTeamMemberModal'
import ConfirmationModal from './ConfirmationModal'


function ModalLayout() {

    const { isOpen, bodyType, size, extraObject, title } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }

    return (
        <>
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                    <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                    <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>
                    {
                        {
                            [MODAL_BODY_TYPES.ADD_NEW_TEAM_MEMBER]: <AddTeamMemberModal closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.CONFIRMATION]: <ConfirmationModal extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.DEFAULT]: <div></div>
                        }[bodyType]
                    }
                </div>
            </div>
        </>
    )
}

export default ModalLayout