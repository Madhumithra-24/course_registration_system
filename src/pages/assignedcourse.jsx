import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = ['S NO','RollNo', 'Name', 'Department','Semester', 'Elective Type','Elective']

const TABLE_ROWS = [
    {
        sno:'1',
        rollno: '7376211EC206',
        name: 'Madhumithra',
        department: 'ECE',
        semester: ' 6',
        electivetype:"Open",
        elective :'Principles Of Management'
    }, //like this modfiy all the balance
    {
      sno:'2',
      rollno: '7376211EC108',
      name: 'Anurithika',
      department: 'ECE',
      semester: ' 6',
      electivetype:"Open",
      elective :'Energy Conservation'
  },
  {
    sno:'3',
    rollno: '7376212IT211',
    name: 'RamyhaShree',
    department: 'IT',
    semester: ' 6',
    electivetype:"Department",
    elective :'XML Web'
},
{
  sno:'4',
  rollno: '7376221EC508',
  name: 'Jeeva',
  department: 'ECE',
  semester: ' 6',
  electivetype:"Department",
  elective :'Machine Learning'
},
{
  sno:'5',
  rollno: '7376211EC190',
  name: 'Kaviyameena',
  department: 'ECE',
  semester: ' 6',
  electivetype:"Department",
  elective :'Multimedia Compression'
},
{
  sno:'6',
  rollno: '7376212IT129',
  name: 'Dharshini',
  department: 'IT',
  semester: ' 6',
  electivetype:"Open",
  elective :'Bio Fuels'
},
{
  sno:'7',
  rollno: '7376211SE103',
  name: 'Akalya',
  department: 'ISE',
  semester: ' 6',
  electivetype:"Department",
  elective :'Information Coding Technique'
},
]

function assignedcourse() {
    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="bg-blue-100"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {TABLE_ROWS.map(({ sno,rollno, name, department, semester, electivetype,elective }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1
                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-100" className="font-normal">
                                        {sno}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {rollno}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {department}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {semester}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {electivetype}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {elective}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-500"
                                        className="font-medium"
                                    >
                                        
                                    </Typography>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Card>
    )
}
export default assignedcourse
