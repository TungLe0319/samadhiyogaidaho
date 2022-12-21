import { AppState } from "../AppState.js"
import { Schedule } from "../models/Schedule.js"
import { api } from "./AxiosService.js"

class ScheduleService {
async createSchedule(scheduleData){
  const res = await api.post('api/schedule',scheduleData)
  let newSchedule = new Schedule(res.data)
  AppState.schedules.push(newSchedule)
}

async getSchedule(){
  const res = await api.get('api/schedule')
  AppState.schedules = res.data.map(s=>new Schedule(s))
}
async updateSchedule(scheduleData){
  const res = await api.put('api/schedule',scheduleData)
  let updatedSchedule = new Schedule(res.data)
    let index = AppState.schedules.findIndex((s) => {
        s.id == scheduleData.id;
      });
  
      AppState.schedules.splice(index, 1,updatedSchedule);
}
}
export const scheduleService = new ScheduleService()