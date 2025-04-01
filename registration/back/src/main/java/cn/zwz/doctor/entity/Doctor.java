package cn.zwz.doctor.entity;

import cn.zwz.basics.baseClass.ZwzBaseEntity;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.math.BigDecimal;

/**
 * @author 郑为中
 */
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "a_doctor")
@TableName("a_doctor")
@ApiModel(value = "陪诊员")
public class Doctor extends ZwzBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "陪诊员姓名")
    private String doctorName;

    @ApiModelProperty(value = "陪诊员年龄")
    private int age;

    @ApiModelProperty(value = "学历学位")
    private String education;

    @ApiModelProperty(value = "开始工作时间")
    private String workDate;

    @ApiModelProperty(value = "毕业学校")
    private String university;

    @ApiModelProperty(value = "职称")
    private String postLevel;

    @ApiModelProperty(value = "专业")
    private String major;

    @ApiModelProperty(value = "所属医院ID")
    private String subjectId;

    @ApiModelProperty(value = "所属医院")
    private String subjectName;

    @ApiModelProperty(value = "陪诊员介绍")
    private String about;

    @ApiModelProperty(value = "陪诊员照片")
    private String photo;

    @ApiModelProperty(value = "预约费用")
    private BigDecimal orderMoney;

    @Transient
    @TableField(exist=false)
    @ApiModelProperty(value = "是否当日")
    private String noeDate;
}