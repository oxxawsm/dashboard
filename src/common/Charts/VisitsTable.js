import moment from 'moment';
import { useState } from 'react';
import TitleCard from '../Cards/TitleCard';
import { PAGES_VISITS } from '../../utils/mockedData'

function VisitsTable() {

  const [visits] = useState(PAGES_VISITS)

  return (
      <>

          <TitleCard title='Просмотры' topMargin='mt-2'>

              {/* Team Member list in table format loaded constant */}
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
                              visits.map((l, k) => {
                                  return (
                                      <tr key={k}>
                                          <td>
                                              <div className='flex items-center space-x-3'>
                                                  <div>
                                                      <div className='font-bold'>{l.address}</div>
                                                  </div>
                                              </div>
                                          </td>
                                          <td>{l.views}</td>
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