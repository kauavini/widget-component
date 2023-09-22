import { Rocket, X, Check } from "lucide-react"
import { useRef } from "react" 

interface WidgetProps{
  showNotifications: boolean
}

export default function Widget( {showNotifications }: WidgetProps){
  const buttonRef = useRef()

  return(
    <div className={` w-[448px] absolute rounded ${showNotifications ? 'block scale-100 -top-15 transition-transform': 'top-7 hidden scale-95'} `}>
      {/*Header*/}
        <div className="bg-zinc-200  dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
            <span className="font-bold">Notifications</span>
            <button className="text-violet-500 font-bold text-xs">
              MARCAR TODAS COM LIDAS
            </button> 
        </div>


     {/*Recents*/}
      <div>
        
      <div className= " bg-zinc-300 dark:bg-zinc-950 px-5 py-2 text-sm text-zinc-600 dark:text-zinc-400" >Recentes</div>

      {/* Notification Component */}

      <div className="divide-y-2 divide-zinc-500 dark:divide-zinc-950">

        <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
          </div>

        <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
        </div>
        </div>
      </div>

      {/*Antigas*/}
      <div>
  
      <div className="bg-zinc-950 px-5 py-2 text-sm text-zinc-400" >Antigas</div>

      {/* Notification Component */}

      <div className="divide-y-2 divide-zinc-950">

        <div className="bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p>
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
            <div className="flex gap-2 self-center" >
                  <button className=" bg-zinc-800 w-8 h-8 rounded flex items-center justify-center hover:bg-zinc-700" > <X className="w-3 h-3" /> </button>
                  <button className=" bg-violet-500 w-8 h-8 rounded flex items-center justify-center hover:bg-violet-600" ><Check className="w-3 h-3" /></button>
               </div>
          </div>

          <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
        </div>

        <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
        </div>


        <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
        </div>


        <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
        </div>


        <div className=" bg-zinc-200 dark:bg-zinc-900 px-8 py-4 flex items-center gap-6">
            <Rocket className="w-6 h-6 text-violet-500" />
            <div className="flex-1 flex flex-col gap-2" >
              <p className="text-sm leading-relaxed  text-zinc-600 dark:text-zinc-100" >
              Vc recebeu um convite para participar da empresa Rocketseat
              </p> 
              <div className="text-xxs text-zinc-400 flex items-center gap-1">
                <span>Convite</span>
                <span>Ha 3 min</span>
              </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}