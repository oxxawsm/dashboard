import TitleCard from '../Cards/TitleCard';
import { PAGES_VISITS } from '../../utils/mockedData'

function VisitsTable() {

  return (
      <>

          <TitleCard title='Просмотры' topMargin='mt-2'>
              <div className='overflow-x-auto w-full'>
                  <table className='table w-full'>
                      <thead>
                          <tr>
                              <th>Адрес страницы</th>
                              <th>Просмотры</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              PAGES_VISITS.map((label, key) => {
                                  return (
                                      <tr key={key}>
                                          <td>
                                              <div className='flex items-center space-x-3'>
                                                  <div>
                                                      <div className='font-bold'>{label.address}</div>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>{label.views}</td>
                                      </tr>
                                  )
                              })
                          }
                      </tbody>
                  </table>
              </div>
          </TitleCard>
      </>
  )
}

export default VisitsTable;