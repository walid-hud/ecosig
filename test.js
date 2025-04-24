import { fstat, read } from "fs"
import process from "process"



console.log(process.permission.has(read) || 'has not')
