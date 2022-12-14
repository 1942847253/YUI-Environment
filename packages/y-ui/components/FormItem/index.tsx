import { uuid } from "../../shared/utils";
import { computed, defineComponent, inject, onMounted, provide, ref, watch } from "vue";
import ShrinkBox from "../../components/ShrinkBox";
import './index.scss';

export default defineComponent({
    name: 'YFormItem',
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String,
            default: null
        },
    },
    emits: [],
    setup(props, { emit, slots }) {
        provide('prop', props.prop);
        const model = inject('model') as Object;
        const key = uuid();
        const rules = inject('rules') as any;
        const prop = inject('prop', props.prop)
        const errorMessage = ref('Please enter the content first');
        const labelRef = ref<HTMLDivElement | null>(null)
        const shrinkFormErrorSwitchFn = ref<Function>()
        provide('shrinkFormErrorSwitchFn', shrinkFormErrorSwitchFn)
        provide('changeErrorMessage', (message: string) => {
            errorMessage.value = message;
        })
        onMounted(() => {
        })

        const isRequired = computed(() => {
            return Object.keys(model).includes(props.prop)
        })

        const shrinkSelectSwitch = (shrinkViewConfigSwitch: Function) => {
            shrinkFormErrorSwitchFn.value = shrinkViewConfigSwitch
        }
        return () => (
            <div class="y-form-item-content">
                <label class="y-form-item-label" ref={labelRef}>
                    {isRequired.value && <span class="iconfont icon-bitian"></span>}
                    {props.label}
                </label>
                <div class="y-form-item-slot">
                    {slots.default!()}
                    <ShrinkBox shrinkViewSwitch={shrinkSelectSwitch} zIndex="0">
                        <div class="y-form-item-error">
                            {errorMessage.value}
                        </div>
                    </ShrinkBox>

                </div>

            </div>
        )
    }
})