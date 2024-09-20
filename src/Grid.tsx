import { AgGridReact } from 'ag-grid-react'
import axios from 'axios'
import "ag-grid-community/styles/ag-grid.css";
import 'ag-grid-community/styles/ag-theme-quartz.css';

const PAGE_SIZE = 20

function Grid({ itemToShow }: any) {

    const columnDefs = [
        {
            field: "name",
            headerName: "name"
        }
    ]

    const getServerSideDataSource = () => {
        return {
            getRows: (params: any) => {
                const blockSize = params.request.endRow - params.request.startRow;
                let url = `https://pokeapi.co/api/v2/berry?offset=${params.request.startRow}&limit=${blockSize}`
                if (itemToShow === "locations") {
                    url = `https://pokeapi.co/api/v2/location?offset=${params.request.startRow}&limit=${blockSize}`
                }
                axios.get(url)
                    .then((response: any) => {
                        params.success({
                            rowData: response.data.results,
                            rowCount: response.data.count
                        })
                    })
                    .catch((error) => {
                        alert('error')
                    })
            }
        }
    }

    return (
        <div style={{ height: 600 }} className="ag-theme-quartz">
            <h1 className='text-xl'>Affichage des {itemToShow}</h1>
            <AgGridReact
                rowModelType='serverSide'
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={PAGE_SIZE}
                cacheBlockSize={PAGE_SIZE}
                serverSideDatasource={getServerSideDataSource()}
            />
        </div>
    )
}

export default Grid
