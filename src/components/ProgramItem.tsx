import { useAppDispatch } from '../hooks/reduxHooks';
import {
  ProgramItem,
  ProgramBox,
  ProgramContent,
  ProgramFlex,
  ProgramStack,
  ProgramTitle,
  ProgramText,
  useProgram,
} from "planby";
import { setCurrentShow } from '../store/Channels';

export const Program = ({ program, ...rest }: ProgramItem) => {

  const dispatch = useAppDispatch();

  const { styles, formatTime, set12HoursTimeFormat, isLive } =
    useProgram({
      program,
      ...rest,
    });

  const { data } = program;
  const { title, since, till } = data;

  const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
  const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

  const handleSetCurrentChannel = () => {
    dispatch(setCurrentShow(data))
  }

  return (
    <ProgramBox width={styles.width} style={styles.position} onMouseEnter={handleSetCurrentChannel}>
      <ProgramContent width={styles.width} isLive={isLive}>
        <ProgramFlex>
          <ProgramStack>
            <ProgramTitle>{title}</ProgramTitle>
            <ProgramText>
              {sinceTime} - {tillTime}
            </ProgramText>
          </ProgramStack>
        </ProgramFlex>
      </ProgramContent>
    </ProgramBox>
  );
};
