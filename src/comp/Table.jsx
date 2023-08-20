import React from 'react'
import data from './Data.json';
const Table = () => {
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-900">
            <div class="col-span-12">
                <div class="overflow-auto lg:overflow-visible ">
                    <table class="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead class="bg-gray-800 text-gray-500">
                            <tr>
                                <th class="p-3">Player</th>
                                <th class="p-3 text-left">Runs</th>
                                <th class="p-3 text-left">Average</th>
                                <th class="p-3 text-left">Strike Rate</th>
                                <th class="p-3 text-left">Dots</th>
                                <th class="p-3 text-left">Focus</th>
                                <th class="p-3 text-left">Sixes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(data).map((player, index) => (
                                <tr key={index} className={(index % 2 !== 0) ? 'bg-gray-800' : ''}>
                                    <td class="p-3">
                                        {player}
                                    </td>
                                    <td class="p-3">
                                        {data[player].runs}
                                    </td>
                                    <td class="p-3 font-bold">
                                        {data[player].average}
                                    </td>
                                    <td class="p-3">
                                        {data[player].strike_rate * 100}
                                    </td>
                                    <td class="p-3">
                                        {data[player].dots}
                                    </td>
                                    <td class="p-3">
                                        {data[player].fours}
                                    </td>
                                    <td class="p-3">
                                        {data[player].sixes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table
