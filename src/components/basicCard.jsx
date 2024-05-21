import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

function SimpleCard() {
    
    return (
        <>
            <div className='flex gap-3'>
                <Card className="mt-6 w-60 bg-blue-300">
                    <CardBody className="p-4">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Total Department
                        </Typography>
                        <Typography>8</Typography>
                    </CardBody>
                </Card>

                <Card className="mt-6 w-60 bg-green-300">
                    <CardBody className="p-4">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            No.of.Students
                        </Typography>
                        <Typography>400</Typography>
                    </CardBody>
                </Card>
                <Card className="mt-6 w-60 bg-red-300">
                    <CardBody className="p-4">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Elective Courses
                        </Typography>
                        <Typography>2</Typography>
                    </CardBody>
                </Card>
                <Card className="mt-6 w-70 bg-orange-300">
                    <CardBody className="p-4">
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Open Elective Courses
                        </Typography>
                        <Typography>8</Typography>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default SimpleCard
